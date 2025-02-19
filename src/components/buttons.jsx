
export default function Button ({text, padding}) {

    return (
        <div>
            <button className={`bg-[#AB7442] text-lg hover:bg-[#AB7442]/90 text-white ${padding} max-md:hidden`}>
                {text}
            </button>
        </div>
    )
}