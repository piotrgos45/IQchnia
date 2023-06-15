import React from 'react';
function IngredientsSearch(){
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <button
                className="mt-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Burger wołowy
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-auto fixed inset-0 z-50
                                    outline-none focus:outline-none">
                        <div className="mt-96 relative w-auto my-6 mx-auto max-w-5xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none
                                            focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200
                                                rounded-t">
                                    <h3 className="text-3xl font-semibold">Burger wołowy</h3>
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right
                                                       text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none
                                                         focus:outline-none">×</span>
                                    </button>
                                </div>
                                <img alt={""} className={"w-6/12 object-contain mx-auto"} src={"https://gastrowiedza.pl/sites/default/files/styles/big/public/2020-03/Jedzenie%20z%20dostaw%C4%85%20do%20domu.jpg?itok=D6Q1BgPr"} />
                                <div className="relative px-6 pt-4">
                                    <p className={"text-slate-500 text-2xl"}>Składniki:</p>
                                    <ul className="my-4 text-slate-500 text-lg leading-relaxed list-disc pl-6">
                                        <li>1 kg wołowiny - np. antrykot, pręga, łata</li>
                                        <li>1 średnia cebula - około 150 g</li>
                                        <li>1 średnie jajko</li>
                                        <li>2 płaskie łyżeczki soli</li>
                                        <li>1 płaska łyżeczka pieprzu</li>
                                        <li>6 bułek do burgerów</li>
                                        <li>duży pomidor malinowy</li>
                                        <li>mała cebula cukrowa lub zwykła</li>
                                        <li>kulka mozzarelli lub kawałek żółtego sera</li>
                                        <li>2 korniszony lub ogórki kiszone</li>
                                        <li>garść rukoli</li>
                                        <li>kilka listków sałaty lodowej</li>
                                    </ul>
                                </div>
                                <div className="relative px-6 pt-4 flex-auto">
                                    <p className={"text-slate-500 text-2xl"}>Instrukcja:</p>
                                    <ol className="my-4 text-slate-500 text-lg leading-relaxed list-decimal pl-6">
                                        <li>Wołowinę doprawiamy świeżo zmielonym czarnym pieprzem, nie solimy. Ewentualnie dodajemy inne ulubione przyprawy.</li>
                                        <li>Wyrabiamy mięso tak jak na kotlety mielone, formujemy w płaskie placuszki. Możemy je grillować na patelni grillowej cienko posmarowanej olejem albo usmażyć na oleju. Po grillowaniu lub smażeniu burgery solimy.</li>
                                        <li>Bułki przekrawamy na pół i opiekamy w piekarniku lub opiekaczu, by były chrupiące. Pomidory i cebulę kroimy w krążki. Sałatę myjemy i osuszamy</li>
                                        <li>Między połówki bułek wkładamy kolejno: sałatę, krążki pomidorów i cebuli, burgery (posmarowane np. ostrym sosem). Gotowe hamburgery możemy podać z frytkamis</li>
                                    </ol>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm
                                                   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm
                                                   px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1
                                                   mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default IngredientsSearch