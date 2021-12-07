import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';

import { PS4Screen } from '../components/ps4/PS4Screen';
import { PCScreen } from '../components/pc/PCScreen';
import { XboxScreen } from '../components/xbox/XboxScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { GameScreen } from '../components/game/GameScreen';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="pc" element={<PCScreen />} />
                    <Route path="ps4" element={<PS4Screen />} />
                    <Route path="xbox" element={<XboxScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="game/:GameId" element={<GameScreen />} />

                    <Route path="/" element={<PCScreen />} />

                </Routes>
            </div>
        </>
    )
}
