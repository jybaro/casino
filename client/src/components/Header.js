import React from 'react'

export const Header = ({title, machine, setStart, setMachine, hideInfo}) => {
    const handleLogout = () => {
        setStart(false);
        setMachine({});
    }
    return (
        <nav className="
                bg-yellow-600 
                flex 
                items-center 
                justify-between 
                flex-wrap 
                bg-teal-500 
                p-6
            ">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">La casa siempre gana!</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow"><strong>{ title }</strong> 
                
                </div>
                <div>
                    { machine && !hideInfo && <span> {machine.credits} cr&eacute;dito{machine.credits !== 1 && 's'} en cuenta, {machine.sessionCredits} cr&eacute;dito{machine.credits !== 1 && 's'} en sesi&oacute;n</span>}
                    { machine && hideInfo && "???" }
                    { machine && machine._id && 
                        <a 
                            href="#" 
                            className="
                                inline-block 
                                text-sm 
                                px-4 
                                py-2 
                                leading-none 
                                border 
                                rounded 
                                text-white 
                                border-transparent 
                                hover:border-white 
                                hover:text-teal-500 
                                hover:bg-red 
                                mt-4 
                                lg:mt-0
                            "
                            onClick={handleLogout}
                        >Cerrar sesi&oacute;n de { machine.userName }</a> }
                </div>
            </div>
        </nav>
    )
}
