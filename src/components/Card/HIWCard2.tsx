interface HIWCard2Props {
    heading: string;
    description: string;
    btnCls: string;
    borderColor: string[];
    btnText: string;
}

const HIWCard2 = ( { heading, description, btnCls, borderColor, btnText }: HIWCard2Props) => {
    return (
        <div className="relative h-fit">
            <div className=" bg-white h-fit flex-1 shadow-[0px_4px_31.8px_rgba(0,0,0,0.1)] gradient-border p-14"
                style={{ "--hiw-border-color1": borderColor[0], "--hiw-border-color2": borderColor[1] } as React.CSSProperties} >

                <h4 className="font-bold text-4xl mb-4">{heading}</h4>
                <p className="text-[#222E48]/70 text-lg leading-[170%]">{description}</p>
            </div>
            <div className={`w-[100px] h-[100px] ${btnCls} rounded-full top-0 left-0 -translate-x-1/3 -translate-y-1/3 absolute flex justify-center items-center text-white font-bold text-[40px] shadow-[inset_0px_-5.46285px_14.17px_rgba(0,0,0,0.3),inset_0px_5.46285px_13.1578px_#FFFFFF]`}>{btnText}</div>
        </div>
    )
}

export default HIWCard2