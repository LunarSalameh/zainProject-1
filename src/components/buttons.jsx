
export default function Button ({text, padding}) {

    return (
            <button className={`bg-[#AB7442] text-lg hover:bg-[#AB7442]/90 text-white ${padding}`}>
                {text}
            </button>
    )
}