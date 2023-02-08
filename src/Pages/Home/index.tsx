import react, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, } from 'react-router-dom';
import MesaSvg from '../../assets/mesa-de-jantar.png';

import {
  Container,
  Content,
  Table,
  BusyTable
} from './styles';

import { api } from '../../services/api';
import { Loading } from '../../components/Loading';

interface Table {
  CD_MESA: number;
  OCUPADA: string;
}

export function Home() {
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(false);

  async function listTables() {
    setLoading(true);
    await api.get('/list-tables')
      .then(response => { return setTables(response.data.transactionQuery) })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    setLoading(false);
    listTables();
  }, []);

  return (
    <Container>
      <Content>
        {
          loading ? (
            tables.map((table, index) => (
              table.OCUPADA === 'S' ? (
                <Link style={{ textDecoration: 'none' }} to={`/sale/${table.CD_MESA}`}>
                  <BusyTable key={index}>
                    <img src={MesaSvg} alt="Mesa" />
                    <strong>Mesa {table.CD_MESA}</strong>
                  </BusyTable>
                </Link>
              ) : (
                <Link style={{ textDecoration: 'none' }} to={`/new-sale/${table.CD_MESA}`}>
                  <Table key={index}>
                    <img src={MesaSvg} alt="Mesa" />
                    <span>Mesa {table.CD_MESA}</span>
                  </Table>
                </Link>
              )
            ))
          ) : <Loading />
        }
      </Content>
    </Container >
  );
}