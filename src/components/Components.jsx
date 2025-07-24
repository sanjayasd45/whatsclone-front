import "./Components.css";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FaRegHeart, FaUserGroup } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineUserDelete } from "react-icons/ai";
import { LuPencil } from "react-icons/lu";
import { VscSearch } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

export const Dropdown = ({ setOverlay, children }) => {
  return (
    <div className="dropdown">
      <div
        className="transparent-overlay"
        onClick={() => setOverlay(false)}
      ></div>
      {children}
    </div>
  );
};

export const FilterOptions = () => {
  return (
    <div className="filter-options">
      <h4>Filter chats by</h4>
      <ul>
        <li>
          <MdOutlineMarkUnreadChatAlt />
          Unread
        </li>
        <li>
          <FaRegHeart />
          Favorites
        </li>
        <li>
          <RiContactsLine />
          Contacts
        </li>
        <li>
          <AiOutlineUserDelete />
          Non-contacts
        </li>
        <li>
          <FaUserGroup />
          Groups
        </li>
        <li>
          <LuPencil />
          Drafts
        </li>
      </ul>
    </div>
  );
};

export const NewChatOptions = () => {
  return (
    <div className="new-chat-options">
      <h2>New chat</h2>
      <SearchBar/>
      <div>
        <div><p>New contect</p></div>
        <div><p>New Group</p></div>
        <div><div><p>Sanjay Kumar</p> <p>Message Your Self</p></div></div>
      </div>
      <p>Frequintly connected</p>
      <div>
        <div><p>Ravi Kumar</p></div>
        <div><p>Priya Singh</p></div>
        <div><p>Anjali Sharma</p></div>
      </div>
      <p>All Contacts</p>
        <div>
            <div><p>Komal Singh</p></div>
            <div><p>Sakshi Verma</p></div>
            <div><p>Nikhil Verma</p></div>
            <div><p>Sanjay Kumar</p></div>
        </div>
    </div>
  );
};

export const SearchBar = ({ searchValue, setSearchValue }) => {
  const handleChange = (e) => {
    // e.preventDefault()
    setSearchValue(e.target.value);
  };
  return (
    <div className="sidebar-search">
      <form>
        <p>
          <VscSearch />
        </p>
        <input
          onChange={handleChange}
          placeholder="Search or Start a new chat"
          value={searchValue}
        ></input>
        {searchValue ? (
          <p onClick={() => setSearchValue("")}>
            <RxCross2 />
          </p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};
