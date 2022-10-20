import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";

interface SideberDrawerProps {
   children: React.ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children } : SideberDrawerProps){
   const disclosure = useDisclosure();
   const router = useRouter()

   useEffect(() => {
      disclosure.onClose()
   }, [router.asPath])

   return (
      <SidebarDrawerContext.Provider value={disclosure}>
         { children }
      </SidebarDrawerContext.Provider>
   )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)