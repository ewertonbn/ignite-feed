import { PencilLine } from 'phosphor-react'

import { Avatar } from './avatar'

export function Sidebar() {
  return (
    <aside className="overflow-hidden rounded-lg bg-gray-800">
      <img
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-[72px] w-full object-cover"
        alt=""
      />

      <div className="mt-[calc(0px_-_1.5rem_-_6px)] flex flex-col items-center">
        <Avatar src="https://github.com/ewertonbn.png" />
        <strong className="mt-4 leading-[1.6] text-gray-100">
          Ewerton Bernardo
        </strong>
        <span className="text-sm leading-[1.6] text-gray-400">
          CEO @EBN Tech
        </span>
      </div>

      <footer className="mt-6 border-t border-gray-600 px-8 pb-8 pt-6">
        <a
          href="#"
          className="bg-transparent flex h-[50px] items-center justify-center gap-2 rounded-lg border border-green-500 px-6 text-green-500 transition-colors hover:bg-green-500 hover:text-white"
        >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
