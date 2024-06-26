/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks"
import { useEffect, useState } from "react";
import { GoCopy } from "react-icons/go";
import { HiShare } from "react-icons/hi2"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ShareButton = ({accommodation}:{accommodation: any})=>{
    const [isOpen, {open, close}] = useDisclosure(false);
    const [link, setLink] = useState("");
    const createLink = ()=>{
        setLink(`http://localhost:5000/places/${accommodation.id}`)
    }
    useEffect(()=>{
        createLink();
    },[])
    return(
        <div>
            <button onClick={open}  className="w-[4rem] h-[3rem] flex items-center justify-center rounded-sm border border-[#8DD3BB] font-bold">
                <HiShare color="black" size={20} />
            </button>
            <Modal opened={isOpen} onClose={close} title="Share Accommodation">
                <div className="w-full h-full ">
                    <h1>Accommodation share Link</h1>
                    <p className=" text-blue-600 font-semibold" style={{userSelect: "auto"}}>{link}</p>
                    <CopyToClipboard text={link}>
                        <button className="py-3 w-full rounded-md border mt-4 flex items-center justify-center gap-3"><GoCopy/> Copy Share Link</button>
                    </CopyToClipboard>
                </div>
            </Modal>
        </div>
    )
}
export default ShareButton