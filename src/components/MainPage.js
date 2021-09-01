import SearchHistoryList from "./SeachHistoryList";
import {useState} from "react";
import SearchBar from "./SearchBar";
import LocationMap from "./LocationMap";
import LocationInfo from "./LocationInfo";
import useApiCallback from "../callbacks/useApiCallback";

function MainPage() {
    const [searchedLocation, updateSearchedLocation] = useState([]);
    const [searchHistory, updateSearchHistory] = useState([]);

    const {data} = useApiCallback('check', true);

    return (
        <div className={`container p-3`}>
            <div className={`row`}>
                <div className={`col-3`}>
                    <SearchHistoryList list={searchHistory}/>
                </div>
                <div className={`col-9`}>
                    <div className={`row`}>
                        <div className={`col-7`}>
                            <LocationMap
                                location={data}
                            />
                        </div>
                        <div className={`col-5`}>
                            <LocationInfo
                                label={`Your location details`}
                                location={data}
                            />
                        </div>
                    </div>
                    <div className={`row my-2`}>
                        <div className={`col-12`}>
                            <SearchBar
                                updateSearchedLocation={updateSearchedLocation}
                                updateSearchHistory={updateSearchHistory}
                            />
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-7`}>
                            <LocationMap
                                location={searchedLocation[searchedLocation.length - 1] || {}}
                            />
                        </div>
                        <div className={`col-5`}>
                            <LocationInfo
                                label={`Searched location details`}
                                location={searchedLocation[searchedLocation.length - 1] || {}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;