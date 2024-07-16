

export default function Button({as: Component = "button", type="button", children, ...props}) {
  return (
    <Component
      className="border-solid border-[3px] border-zinc-300 px-8 py-2 rounded-lg hover:border-emerald-500 hover:text-emerald-500"
      type={Component === "button" ? type : undefined}
      {...props} 
    >
        {children}
    </Component>
  )
}