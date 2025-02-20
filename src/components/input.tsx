import type { ComponentProps } from 'react'

// Componente  responsavel por ter a componentização individual
/*
Composition patter
Desestruturação de componentes, ou seja, realiza a separação dos componentes e cada um tera a sua função.

*/ interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100  data-[error=true]:border-danger"
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 span-color group-data-[error=true]:text-danger "
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}

//         className="flex-1 outline-0 placeholder:text-gray-400 group-[&:not(:has(input:placeholder-shown))]:text-gray-100"

// interface InputProps extends ComponentProps<"input"> {
//   error?: boolean;
// }

// export function Input({ error = false, ...props }: InputProps) {
//   return (
//     <div
//       data-error={error}
//       className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
//     />
// <span className="text-gray-400 group-focus-within:text-gray-100 span-color group-data-[error=true]:text-danger">
//   <Mail />
// </span>

//       <input
//         // className={`${isFocused && hasContent ? 'border-blue-500 shadow-md shadow-blue-500/50' : 'text-gray-100'`}
//         {...props}
//       />
//     </div>
//   );
// }
//
