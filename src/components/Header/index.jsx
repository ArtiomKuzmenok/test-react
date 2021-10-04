import SearchInput from "../SearchInput";
import logo from "../../assets/logo.svg";
import "./index.css";
import Select from "../Select/Select";

const Header = ({ onSearch, filter, setFilter }) => {
  
  return (
    <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <SearchInput filter={filter} setFilter={setFilter} onSearch={onSearch}/>
    <Select value={filter.status} onChange={selectedStatus => setFilter({...filter, status: selectedStatus})} defaultValue="none" 
        options={[
          {value: 'Alive', name: 'Alive'},
          {value: 'Dead', name: 'Dead'},
          {value: 'unknown', name: 'unknown'},
        ]}/>
    <Select value={filter.gender} onChange={selectedGender => setFilter({...filter, gender: selectedGender})} defaultValue="none" 
        options={[
          {value: 'Female', name: 'Female'},
          {value: 'Male', name: 'Male'},
          {value: 'Genderless', name: 'Genderless'},
          {value: 'unknown', name: 'unknown'},
        ]}/>
    </header>
  )
}

export default Header;
