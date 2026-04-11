
interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
}: Props) {

  return (
    <div>
      <label className="text-sm font-medium text-gray-600 mb-1 sm:mb-2 block">
        {label} <span className="text-red-700">*</span>
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        
        className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 pr-12 outline-none focus:border-green-600"
      />
    </div>
  );
}