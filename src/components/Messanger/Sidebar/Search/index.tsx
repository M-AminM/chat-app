import React, { useContext } from "react";
import { SlMagnifier } from "react-icons/sl";
import { AppContext } from "../../../../context/store";

interface ChatSearchProps extends React.PropsWithChildren {}
const ChatSearch: React.FunctionComponent<
  ChatSearchProps
> = (): JSX.Element => {
  const { contacts, setSearch } = useContext(AppContext);
  const changeHandler = (e: any) => {
    const input = e.target.value;
    const filterContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearch(filterContacts);
  };
  return (
    <div className="flex bg-slate-700 items-center rounded-2xl ">
      <SlMagnifier className="ml-2 text-gray-300 cursor-pointer text-xl" />
      <input
        className="border-none outline-0 px-4 py-2 bg-slate-700 rounded-2xl w-full text-gray-300 text-sm  "
        type="text"
        placeholder="Search Chat"
        onChange={changeHandler}
      />
    </div>
  );
};

export default ChatSearch;
