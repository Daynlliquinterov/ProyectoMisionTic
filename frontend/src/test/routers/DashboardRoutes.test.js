import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';


describe('Pruebas en <DashboardRoutes />', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Juanito'
        }
    }


    test('debe de mostrarse correctamente - PC ', () => {
    
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={ ['/'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim() ).toBe('Juanito');
        expect( wrapper.find('h1').text().trim() ).toBe('PCScreen');

    })

    test('debe de mostrarse correctamente de PS4 ', () => {
    
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={ ['/ps4'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('PS4Screen');

    })
    test('debe de mostrarse correctamente de XBOX ', () => {
    
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={ ['/xbox'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('XboxScreen');

    })
    
    
})
