import React, { useEffect, useState, useContext } from 'react';
import InfoContext from '../context/infoContext';
import { Card } from 'antd';

function Units() {
  const { requestAllUnits, requestAllCompanies } = useContext(InfoContext);
  const [allUnits, setAllUnits] = useState([]);
  const [allCompanies, setAllCompanies] = useState([]);

  useEffect(()=> {
    const response = async () => {
      setAllUnits(await requestAllUnits());
    };
    response();
  }, [requestAllUnits]);

  useEffect(()=> {
    const response = async () => {
      setAllCompanies(await requestAllCompanies());
    };
    response();
  }, [requestAllCompanies]);
 
  return (
    <div className="container">
      <h1>Units</h1>
      <div>
      {
        allUnits && allCompanies  ? allUnits.map((unit, index) => {
          let company = allCompanies.find(item => item.id ===  unit.companyId);
          return <Card title={unit.name} bordered={false} key={unit.id} className="card-list">
            { `Empresa: ${company.name}` }
          </Card>
        })
        : null
      }
      </div>
    </div>
  )
}

export default Units;
