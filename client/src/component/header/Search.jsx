import styled from '@emotion/styled';
import { InputBase,Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background : #fff;
    width:38%;
    border-radius:2px;
    margin-left:10px;
`;
const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;

const SearchIconWrapper = styled(SearchIcon)`
    color: blue;
    padding: 5px;
    margin-left:auto;
    display: flex;
`


const Search = () => {
    return(
        <SearchContainer style={{display:'flex'}}>
        <InputSearchBase
        placeholder='Search for products, brands and more'
        />
        
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>

        </SearchContainer>
    )
}

export default Search;