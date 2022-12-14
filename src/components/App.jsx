import { Component } from 'react';
// import Main from './Main';
// import Sidebar from './Sidebar';
// import { menuConfig } from '../data/menu';
import React from 'react';
import Paper from './Paper';
// import Card from './Card';
// import schoolImg from '../assets/school.png';
import data from '../data/data.json';
import TutorsList from './TutorsList';
// import CitiesList from './CitiesList';
// import DepartmentsList from './DepartmentsList';
import Basket from './Basket/Basket';
import TutorsForm from './TutorsForm/Tutorsform';

export class App extends Component {
  state = {
    tutors: [],
  };

  handleAddTutor = tutor => {
    if (this.state.tutors.find(item => tutor.phone === item.phone)) return;
    this.setState(prevState => ({ tutors: [...prevState.tutors, tutor] }));
  };

  render() {
    return (
      <>
        <Basket />
        <TutorsForm onSubmit={this.handleAddTutor} />
        {/* <Sidebar menu={menuConfig} logo="Logo" />
      <Main>
        <Paper>
          <Card imgUrl={schoolImg} />
          <p>
            Опыт, концентрат знаний и возможность избежать большинство ошибок при приеме на работу. Мы знаем, что хотят большинство локальных и иностранных компаний и можем вам это дать. А еще мы постоянно совершенствуем наши курсы программирования, добавляя туда что-то новое. Вы можете лично ознакомиться с историями успеха наших выпускников, чтобы убедиться в эффективности нашей методики обучения. Да, мы начнем с азов и самой простой информации. Знаем, что большинство людей приходят к нам с нулевыми знаниями.
          </p>
        </Paper> */}
        <Paper>
          <TutorsList tutors={this.state.tutors} />
        </Paper>
        {/* <Paper>
          <CitiesList cities={data.cities} />
        </Paper>
        <Paper>
          <DepartmentsList departments={data.department} />
        </Paper> */}
        {/* </Main> */}
      </>
    );
  }
}
