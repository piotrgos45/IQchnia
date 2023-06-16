interface IIngredientSearch {
    handleSearch: (value: string) => void
}

const IngredientsSearch: React.FC<IIngredientSearch> = ({ handleSearch }) => {

    return (
        <input 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleSearch(event.target.value);
            }}
            placeholder="Szukaj Składników"
            className="border-slate-600 p-2 rounded border-[1px] outline-slate-700 outline-[0.5px]"
        />
    )
}

export default IngredientsSearch
