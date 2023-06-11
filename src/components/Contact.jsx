import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Canvas } from '@react-three/fiber';
import Stars from './ui/Stars';

const schema = yup
  .object({
    name: yup
      .string()
      .trim()
      .min(3, 'Your name should be at least 3 characters.')
      .max(15, 'Your name cannot be longer than 15 characters.')
      .required('Please enter your name'),
    email: yup
      .string()
      .trim()
      .email('Must be a valid email address')
      .required('Please enter your email'),
    message: yup
      .string()
      .trim()
      .min(3, 'Your message should be at least 3 characters.')
      .required('Please write your message'),
  })
  .required();

function Contact() {
  const form = useRef();
  const [msgSend, setMsgSend] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    emailjs
      .sendForm(
        'service_qg289ma',
        'template_le29rxi',
        form.current,
        '7BjEPe4s1YzPxaBW-'
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setMsgSend(true);
            reset();
            setTimeout(() => {
              setMsgSend('');
            }, 5000);
          }
        },
        (error) => {
          console.log(error.text);
          setMsgSend(false);
        }
      );
  }
  return (
    <section id="contact" className="relative w-full min-h-screen snap-center">
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto -z-10 bg-bg-main">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
      <div className="max-w-7xl p-5 pt-20 snap-center z-20 mx-auto">
        <h3 className="text-center text-main-light text-xl lg:text-3xl p-1 m-4 lg:m-20 bg-bg-main">
          Contact
        </h3>
        <div className="flex justify-center">
          <form
            ref={form}
            className="w-72 sm:w-96 flex flex-col gap-3 justify-center text-bg-main bg-bg-main"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p
              className={`text-green-500 mx-auto ${
                msgSend === true ? 'flex' : 'hidden'
              }`}
            >
              Message send
            </p>
            <p
              className={`text-red-500 mx-auto ${
                msgSend === false ? 'flex' : 'hidden'
              }`}
            >
              Error, please, try again or use my contact info
            </p>
            <input
              className="p-3 border-none rounded-md bg-gray-100"
              name="name"
              placeholder="Name"
              {...register('name')}
            />
            <p className="text-red-500 text-xs">{errors.name?.message}</p>
            <input
              className="p-3 border-none rounded bg-gray-100"
              name="email"
              placeholder="Email"
              {...register('email')}
            />
            <p className="text-red-500 text-xs">{errors.email?.message}</p>
            <textarea
              placeholder="Write your message"
              name="message"
              rows={8}
              className="p-3 border-none rounded bg-gray-100 resize-none"
              {...register('message')}
            />
            <p className="text-red-500 text-xs">{errors.message?.message}</p>
            <button
              className="p-2 border border-main-light rounded-md text-main-gray font-bold cursor-pointer hover:text-main-light"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
