export function Header() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
      <span className="text-small text-zinc-400">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Módulo "Desvendando o Redux"
      </span>
    </div>
  )
}