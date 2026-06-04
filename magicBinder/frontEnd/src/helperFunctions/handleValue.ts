export const handleValue = (
  event: React.ChangeEvent<HTMLInputElement>, 
  setUseState: React.Dispatch<React.SetStateAction<string>>):void => {
  const text = event.currentTarget.value;
  setUseState(text);
}