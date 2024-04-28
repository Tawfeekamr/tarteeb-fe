
import { motion } from 'framer-motion';
import {SiteInfo} from "@/types/siteInfo";

interface Props {
    websiteDate: SiteInfo
}

const ButtonWithAnimatedBackground = ({ websiteDate }: Props) => {
    return (
        <div className="relative inline-block">
            <motion.div
                className="absolute inset-0 bg-main-gradient rounded-full"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
            />

            <div className={"relative z-10 block py-3 px-6 lg:mt-20 rounded-full text-lg lg:text-xl font-bold text-white mb-6"}>
                <a href={websiteDate?.whatsappUrl}
                className="block py-3 px-6 lg:mt-20 text-lg lg:text-xl font-bold text-white mb-6">
            {'Let\'s Talk! on WhatsApp'}
                </a>
            </div>

        </div>
    );
};


export  default ButtonWithAnimatedBackground
