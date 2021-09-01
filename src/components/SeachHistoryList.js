function SearchHistoryList({list}) {
    return (
        <div>
            <h5>Search history:</h5>
            <ul className="list-group list-group-flush">
                {list.map((item) => (
                    <li className="list-group-item">{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchHistoryList;