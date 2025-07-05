import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Label } from './components/Label/Label';
import { Text } from './components/Text/Text';
import { Dropdown } from './components/Dropdown/Dropdown';
import { RadioButton } from './components/RadioButton/RadioButton';
import { Img } from './components/Img/Img';
import { HeroImage } from './components/HeroImage/HeroImage';
import { Table } from './components/Table/Table';
import { TableHeader } from './components/Table/TableHeader';
import { TableRow } from './components/Table/TableRow';
import { TableCell } from './components/Table/TableCell';
import { TableFooter } from './components/Table/TableFooter';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h1>Rui Yin UI Component Library</h1>
        <p>Production build of React Component Library</p>
      </header>
      
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ marginBottom: '30px' }}>
          <h2>Buttons</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Button label="Primary Button" $backgroundColor="#007bff" />
            <Button label="Disabled Button" $backgroundColor="#6c757d" disabled />
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>Text & Labels</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Label text="Sample Label" color="#333" />
            <Text content="This is sample text content" color="#666" />
            <Label text="Disabled Label" disabled />
            <Text content="Disabled text content" disabled />
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>Form Elements</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />
            <Dropdown options={['Disabled']} disabled />
          </div>
          <div style={{ marginTop: '10px' }}>
            <RadioButton name="demo" value="option1" label="Option 1" />
            <RadioButton name="demo" value="option2" label="Option 2" />
            <RadioButton name="demo-disabled" value="disabled" label="Disabled Option" disabled />
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>Images</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Img src="/logo192.png" alt="Small Logo" width="100" height="100" />
            <Img src="/logo192.png" alt="Disabled Image" width="100" height="100" disabled />
          </div>
          <div style={{ marginTop: '20px' }}>
            <HeroImage src="/logo512.png" alt="Hero Image" height="200" />
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>Cards</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Card 
              title="Sample Card" 
              description="This is a sample card component with description"
              imageUrl="/logo192.png"
            />
            <Card 
              title="Disabled Card" 
              description="This card is in disabled state"
              disabled
            />
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>Table</h2>
          <Table>
            <TableHeader>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </TableHeader>
            <tbody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Designer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </tbody>
            <TableFooter>
              <tr>
                <td colSpan={3}>Total: 2 users</td>
              </tr>
            </TableFooter>
          </Table>
        </section>

        <section>
          <h2>Disabled Table</h2>
          <Table disabled>
            <TableHeader>
              <tr>
                <th>Item</th>
                <th>Status</th>
              </tr>
            </TableHeader>
            <tbody>
              <TableRow>
                <TableCell>Disabled Item</TableCell>
                <TableCell>Inactive</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </section>
      </main>

      <footer style={{ padding: '20px', backgroundColor: '#f5f5f5', textAlign: 'center', marginTop: '40px' }}>
        <p>&copy; 2025 Rui Yin UI Component Library - Assignment 12</p>
      </footer>
    </div>
  );
}

export default App;
