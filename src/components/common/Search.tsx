import React, {SyntheticEvent} from 'react';

interface Props {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Search = ({searchQuery, setSearchQuery}: Props) => {
    const onInput = (e: SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setSearchQuery(target.value)
    }
    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Search peer"
                name="search"
                value={searchQuery}
                onInput={onInput}
            />
        </div>
    )
}

export default Search;
