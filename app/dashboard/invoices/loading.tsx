import React from 'react'
import { InvoicesTableSkeleton, LatestInvoicesSkeleton } from '../../ui/skeletons';
import { lusitana } from '@/app/ui/fonts';
const loading = () => {
    return (
        <div className="w-full">
            <div className="flex mb-9 w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="mt-4 -mb-1 flex items-center justify-between gap-2 md:mt-8">
                <div className="h-10 w-full rounded-md bg-gray-50" />
                <div className="h-10 px-20 rounded-md bg-gray-50" />
            </div>
            <InvoicesTableSkeleton />
            {/* <LatestInvoicesSkeleton /> */}
        </div>
    )
}

export default loading