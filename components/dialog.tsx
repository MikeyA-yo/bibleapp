"use client"
import { useState } from "react"
import { motion } from "framer-motion"
export default function Dialog() {
    const [isOpen, setIsOpen] = useState(true)
    return (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-50  items-center justify-center bg-black/50 ${isOpen ? "flex" : "hidden"}`}
      >
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Important Message</h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            onClick={()=>{
                setIsOpen(false)
            }}
            >
              <XIcon className="h-5 w-5" />
            </motion.button>
          </div>
          <div className="mt-4 text-gray-500 dark:text-gray-400">
            <p>
              This is an important message that requires your attention. Please take a moment to review the information
              below.
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900"
              onClick={()=>{
                setIsOpen(false)
            }}
            >
              Okay, got it
            </motion.button>
          </div>
        </div>
      </motion.div>
    )
  }
  
  function XIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }