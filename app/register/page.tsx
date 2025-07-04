import AcmeLogo from '@/app/ui/acme-logo';
import { Suspense } from 'react';

import { Metadata } from 'next';
import RegisterForm from '../ui/register-form';

export const metadata: Metadata = {
    title: 'Register',
};
export default function RegisterPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div id='register-form-wrapper' className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-10 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <AcmeLogo />
                    </div>
                </div>
                <Suspense>
                    <RegisterForm />
                </Suspense>
            </div>
        </main>
    );
}