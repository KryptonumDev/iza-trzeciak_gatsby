import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import styled from 'styled-components';
import { regex } from '../constants/regex';
import FormDropdown from '../moleculas/FormDropdown';
import FormInput from '../moleculas/FormInput';
import FormRadio from '../moleculas/FormRadio';
import ContactFormSteps from './ContactFormSteps';
import { AnimatePresence, motion } from 'framer-motion';
import FormCheckbox from '../moleculas/FormCheckbox';
import { Link } from 'gatsby';
import { External } from '../atoms/Icons';
import Button from '../atoms/Button';
import { Clamp } from '../../utils/functions';
import FormError from '../moleculas/FormError';

const subjects = [
  {
    name: 'Konsultacje rozwiązań',
    dropdown: [
      "Konsultacje w zakresie wymagań ubezpieczyciela",
      "Konsultacje w zakresie aranżacji/architektury",
      "Konsultacje branżowe (branży wentylacji, wodno-kanalizacyjna, elektryczna, teletechniczna, drogowa)",
      "Konsultacje w zakresie urządzeń ppoż.",
      "Inne zagadnienie",
    ]
  },
  {
    name: 'Uzgodnienie projektu',
    dropdown: [
      "Projekt budowlany (PAB, PZT lub PT)",
      "Projekt wykonawczy urządzenia ppoż.",
      "Projekt PV",
      "Inny",
    ]
  },
  {
    name: 'Dokument',
    dropdown: [
      "Ekspertyza dla zmiany sposobu użytkowania budynku lub części",
      "Ekspertyza w sprawie rozwiązań zamiennych (obiekty nowoprojektowane i obiekty istniejące)",
      "Scenariusz pożarowy i matryca sterowań",
      "Instrukcja bezpieczeństwa pożarowego",
      "Operat ppoż. dla miejsc związanych z gospodarką odpadami",
      "Opinia techniczna/stanowisko rzeczoznawcy",
    ]
  },
]

const ContactForm = () => {
  const [ sentStatus, setSentStatus ] = useState({ sent: false })
  const [step, setStep] = useState(0);
  const [ subjectSelected, setSubjectSelected ] = useState(null);
  
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    resetField,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const handleNextStep = async (step) => {
    if (step === 1 && await trigger(['name', 'email', 'tel'])) {
      setStep(step);
    } else if (step === 2 && await trigger(['subject', 'subjectInfo'])) {
      setStep(step);
    }
  }

  const onSubmit = (data) => {
    console.log(data);
    // fetch('/api/newsletter', {
    //   method: 'POST', 
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({id: NEWSLETTER_GROUPID, ...data})
    // })
    // .then(response => response.json())
    // .then(response => {
    //   if(response.success){
    //     setSentStatus(prevStatus => ({ ...prevStatus, success: true }));
    //   } else {
    //     setSentStatus(prevStatus => ({ ...prevStatus, success: false }));
    //     reset()
    //   }
    // })
    // .catch(() => {
    //   setSentStatus(prevStatus => ({ ...prevStatus, success: false }));
    //   reset()
    // })
  }

  return (
    <Wrapper className='contactForm'>
      <ContactFormSteps step={step} setStep={setStep} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div
          animate={step === 0 ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <FormInput
            label="Imię"
            type="text"
            register={register('name', { required: true })}
            errors={errors}
          />
          <FormInput
            label="E-mail"
            type="email"
            register={register('email', { required: true, pattern: regex.email })}
            errors={errors}
          />
          <FormInput
            label="Nr telefonu (opcjonalne)"
            type="tel"
            placeholder="___-___-___"
            register={register('tel', { pattern: regex.phone })}
            errors={errors}
          />
          <button
            className="formItem link"
            type='button'
            onClick={() => handleNextStep(1)}
          >Przejdź do następnego kroku</button>
        </motion.div>
        <motion.div
          animate={step === 1 ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="subjects formItem">
            <span>
              Wybierz temat rozmowy
              <FormError error={errors.subject} />
            </span>
            {subjects.map((subject, i) => (
              <FormRadio
                value={subject.name}
                label={subject.name}
                register={register('subject', { required: true, validate: (value) => value !== 'blank' })}
                onClick={() => setSubjectSelected(i)}
                errors={errors}
                key={i}
              />
            ))}
          </div>
          <FormDropdown
            resetField={resetField}
            label="Czego dokładnie dotyczy rozmowa?"
            values={subjects[subjectSelected]?.dropdown}
            register={register('subjectInfo', { required: true })}
            errors={errors}
          />
          <button
            className="formItem link"
            type='button'
            onClick={() => handleNextStep(2)}
          >Przejdź do następnego kroku</button>
        </motion.div>
        <motion.div
          animate={step === 2 ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <FormInput
            label="Dodatkowe informacje (opcjonalne)"
            type="text"
            textarea={true}
            register={register('additionalInfo', { required: true })}
            errors={errors}
          />
          <FormCheckbox
            label={<>Akceptuję{' '}<Link to="/polityka-prywatnosci" className='link'>politykę prywatności</Link><External /></>}
            register={register('legal', { required: true })}
            errors={errors}
          />
          <Button
            type='submit'
            disabled={sentStatus.sent && sentStatus.success === undefined}
          >Wyślij formularz</Button>
        </motion.div>
        <AnimatePresence mode="wait">
          {sentStatus.success !== undefined && (
            sentStatus.success ? (
              <motion.div
                className='status success'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Success />
                <h3>Wiadomość została wysłana pomyślnie</h3>
                <Button type="button" onClick={() => setSentStatus({ sent: false })}>Spróbuj przesłać ponownie</Button>
              </motion.div>
            ) : (
              <motion.div
                className='status error'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Error />
                <h3>Wiadomość nie została wysłana</h3>
                <p>Wyślij formularz jeszcze raz lub spróbuj za jakiś czas</p>
                <Button type="button" onClick={() => setSentStatus({ sent: false })}>Spróbuj przesłać ponownie</Button>
                  <p>Jeśli problem się powtarza skontaktuj się ze mną mailowo <a href='mailto:itrzeciak@fpe.pl' className='link'>itrzeciak@fpe.pl</a></p>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 32px;
  @media (min-width: 750px){
    align-items: flex-start;
    grid-template-columns: auto 1fr;
  }
  form {
    > div {
      overflow: hidden;
      padding: 0 8px;
      margin: 0 -8px;
    }
    position: relative;
    .status {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: absolute;
      inset: 0;
      padding: 32px ${Clamp(16, 24, 32, 'px')};
      &.success {
        background-color: var(--success-100);
        color: var(--success-700);
      }
      &.error {
        background-color: var(--error-100);
        color: var(--error-800);
        .link {
          color: var(--error-800);
          &::before { background-color: var(--error-800) }
        }
      }
      svg {
        margin-bottom: 12px;
      }
      h3 {
        font-size: ${Clamp(18, 18, 20)};
      }
      p {
        font-size: 1rem;
        margin-top: 12px;
      }
      button {
        margin-top: 16px;
        width: 100%;
      }
    }
  }
  .formItem:not(:last-child){
    margin-bottom: 24px;
  }
  .subjects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${Clamp(8, 16, 16, 'px')};
    > span {

  font-size: 1rem;
      grid-column: 4/1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: calc(${Clamp(-12, -12, -4, 'px')} )
    }
  }
`

export default ContactForm;

const Success = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='41' height='40' fill='none'>
    <path
      fill='#C8F1EA'
      d='M.5 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'
    ></path>
    <circle
      cx='20.5'
      cy='20'
      r='10'
      stroke='#379484'
      strokeWidth='1.5'
      opacity='0.5'
    ></circle>
    <path
      stroke='#379484'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M17 20.5l2 2 5-5'
    ></path>
  </svg>
)

const Error = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none'>
    <path
      fill='#EDBDBD'
      d='M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z'
    ></path>
    <path
      stroke='#763E3E'
      strokeWidth='1.5'
      d='M13.312 18.762C16.23 13.587 17.689 11 20 11c2.31 0 3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S25.786 29 20.364 29h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022l.364-.644z'
      opacity='0.5'
    ></path>
    <circle cx='20' cy='24' r='1' fill='#763E3E'></circle>
    <path
      stroke='#763E3E'
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M20 16v5'
    ></path>
  </svg>
)