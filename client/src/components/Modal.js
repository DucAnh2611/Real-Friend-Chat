'use client'
import { useCallback, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createPortal } from 'react-dom'

export default function Modal ({ isShow = false, hide, title, children }) {

  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    hide();
  }, [router])

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )

  return isShow ? createPortal((
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-[rgba(0,0,0,0.6)] backdrop-blur-sm"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit"
      > 
        <div className="h-fit grow bg-black border border-grey-400 rounded-lg box-border p-8 block">
          <div className="flex w-full h-10 items-center justify-between">
            <p className=" text-3xl font-bold text-grey-100">{title}</p>
            <button
            className="h-8 w-8 rounded-max bg-orange-400 text-orange-500 hover:bg-orange-950">
                <FontAwesomeIcon icon={faXmark} onClick={onDismiss}/>
            </button>                    
          </div>

          <div className="block w-fit h-fit box-border mt-5">
            {children}
          </div>                
        </div>
      </div>
    </div>
  ), document.body) : null;
}