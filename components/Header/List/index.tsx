import './styles.css'

export default function List({text, quantity, selected = false}: {text: string, quantity: number| string, selected: boolean}) {
  return (
    <div className={`header_dropdown_list ${selected ? 'bg-[#D1DDFF] text-[##1D4ED8]': 'bg-white text-black'}`}>
        <span>
            {text}
        </span>
        <span className={`circle ${selected && 'bg-[#D1DDFF]'}`}>
            {quantity}
        </span>
    </div>
  )
}
