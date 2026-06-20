export const toggleButton = (useState:boolean, setUseState: React.Dispatch<React.SetStateAction<boolean>>):void => {
  setUseState(!useState);
}