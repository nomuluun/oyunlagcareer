
import { useState } from "react";
import { Modal } from 'flowbite';

export default function Popup() {
  const [openModal, setOpenModal] = useState(false);
  return (
    // <>
    //   <Button className="z-index-[999] text-shar" onClick={() => setOpenModal(true)}>Toggle modal</Button>
    //   <Modal
    //     show={openModal}
    //     size="md"
    //     onClose={() => setOpenModal(false)}
    //     popup
    //   >
    //     <Modal.Header />
    //     <Modal.Body>
    //       <div className="flex w-[879px] h-[479px]">
    //         <img src="/svg/Saly-15.png" alt="" className="" />
    //         <h3 className="mb-5 text-[48px] font-bold max-w-[354px] flex-col">
    //         Ирээдүйгээ тодорхойлох гараагаа эхлүүлээрэй!
    //         </h3>
    //         <div className="flex justify-center rounded-full bg-shar ">
    //           <Button color="failure" onClick={() => setOpenModal(false)}>
    //             {"Тест өгөх"}
    //           </Button>
    //         </div>
    //       </div>
    //     </Modal.Body>
    //   </Modal>
    // </>
    <div
    id="modalEl"
    tabindex="-1"
    aria-hidden="true"
    className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 z-index-[999]"
>
    <div className=" relative max-h-full w-full max-w-2xl z-index-[999]">
        <div className="relative z-index-[999] rounded-lg bg-white shadow dark:bg-gray-700">

            <div
                className="flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600"
            >
                <h3
                    className="text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl"
                >
                    Terms of Service
                </h3>
                <button
                    type="button"
                    className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="space-y-6 p-6">
                <p
                    className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                >
                    With less than a month to go before the European Union
                    enacts new consumer privacy laws for its citizens, companies
                    around the world are updating their terms of service
                    agreements to comply.
                </p>
                <p
                    className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                >
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                </p>
            </div>
            <div
                className="flex items-center space-x-2 rtl:space-x-reverse rounded-b border-t border-gray-200 p-6 dark:border-gray-600"
            >
                <button
                    type="button"
                    className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    I accept
                </button>
                <button
                    type="button"
                    className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    Decline
                </button>
            </div>
        </div>
    </div>
</div>
  );
}
