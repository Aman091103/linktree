'use client';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {signIn} from "next-auth/react";

export default function LoginWithGoogle(){
    
    return (
        <button 
            onClick={() => signIn('google')}
            className="bg-white shadow text-center
            flex items-center gap-3 justify-center w-full py-4" >
            <FontAwesomeIcon icon={faGoogle} className="h-6" />
            <span>Sign In with Google</span>
        </button>
    );
}