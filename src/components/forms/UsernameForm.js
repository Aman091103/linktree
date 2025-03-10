"use client";
import grabUsername from "@/actions/grabUsername";
import RightIcon from "../icons/RightIcon";
import { useState } from "react";
import { redirect } from "next/navigation";
import SubmitButton from "../buttons/SubmitButton";

export default function UsernameForm({ desiredUsername }) {
  const [taken, setTaken] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await grabUsername(formData);
    setTaken(result === false);
    if (result) {
      redirect('/account?created=' + formData.get('username'));
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-4xl font-bold text-center mb-2">
        Grab your username
      </h1>
      <p className="text-center mb-6 text-gray-500">Choose your username</p>
      <div className="max-w-xs mx-auto">
        <input
          name="username"
          className="block p-2 mx-auto border w-full mb-4 text-center"
          defaultValue={desiredUsername}
          type="text"
          placeholder="username"
        />
        {taken && (
          <div className="bg-red-200 border boder-red-500 p-2 mb-2 text-center">
            This username is already taken
          </div>
        )}
        <SubmitButton>
          <span>Claim username</span>
          <RightIcon />
        </SubmitButton>
      </div>
    </form>
  );
}
