import { useState } from 'react';

function FormCourtesyPhone({ passDataToParent }) {
  const courtesyList = [
    { id: 0, type: 'none', name: 'none', bond: 0 },
    { id: 1, type: 'phone', name: 'iPhone', bond: 275 },
    { id: 2, type: 'phone', name: 'Samsung Galaxy', bond: 100 },
    { id: 3, type: 'phone', name: 'Nokia', bond: 100 },
    { id: 4, type: 'charger', name: 'iPhone Charger', bond: 30 },
    { id: 5, type: 'charger', name: 'Samsung Charger', bond: 30 },
    { id: 6, type: 'charger', name: 'Nokia Charger', bond: 30 },
  ];

  const [phoneBorrow, setPhoneBorrow] = useState(0);
  const [chargerBorrow, setChargerBorrow] = useState(0);

  const handleDrop = (event, type) => {
    const itemId = parseInt(event.dataTransfer.getData('text/plain'));
    const selectedItem = courtesyList.find((item) => item.id === itemId);
    if (selectedItem && selectedItem.type === type) {
      if (type === 'phone') setPhoneBorrow(itemId);
      if (type === 'charger') setChargerBorrow(itemId);

      const updateBond =
        courtesyList.find((item) => item.id === phoneBorrow).bond +
        courtesyList.find((item) => item.id === chargerBorrow).bond;
      passDataToParent(updateBond);
    }
    event.preventDefault();
  };

  const handleDragStart = (event, itemId) => {
    event.dataTransfer.setData('text/plain', itemId);
  };

  return (
    <>
      <h2 className="text-center mt-4">Courtesy Phone Selection</h2>

      {/* Available Items Section */}
      <div className="courtesy-list mt-3">
        <h4 className="text-muted">Available Items</h4>
        <div className="d-flex flex-wrap gap-3">
          {courtesyList.map(
            (item) =>
              item.type !== 'none' && (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                  className="draggable-item p-3 border rounded shadow-sm bg-light text-center"
                  style={{ width: '140px', cursor: 'pointer' }}
                >
                  <strong>{item.name}</strong>
                  <p className="text-muted mb-0">Bond: ${item.bond}</p>
                </div>
              )
          )}
        </div>
      </div>

      {/* Drop Zone for Phone */}
      <h4 className="mt-4">Drop Phone Here:</h4>
      <div
        className="drop-zone border p-3 mb-3 bg-white text-center rounded"
        style={{ minHeight: '80px', transition: 'background-color 0.3s ease' }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, 'phone')}
      >
        {phoneBorrow ? (
          <strong>{courtesyList.find((item) => item.id === phoneBorrow).name}</strong>
        ) : (
          <span className="text-muted">No phone selected</span>
        )}
      </div>

      {/* Drop Zone for Charger */}
      <h4>Drop Charger Here:</h4>
      <div
        className="drop-zone border p-3 mb-3 bg-white text-center rounded"
        style={{ minHeight: '80px', transition: 'background-color 0.3s ease' }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, 'charger')}
      >
        {chargerBorrow ? (
          <strong>{courtesyList.find((item) => item.id === chargerBorrow).name}</strong>
        ) : (
          <span className="text-muted">No charger selected</span>
        )}
      </div>

      {/* Selected Items Table */}
      <div className="mt-4">
        <h4>Selected Items</h4>
        <table className="table table-striped table-bordered mt-2">
          <thead className="table-light">
            <tr>
              <th>Item</th>
              <th>Bond Cost</th>
            </tr>
          </thead>
          <tbody>
            {phoneBorrow !== 0 && (
              <tr>
                <td>{courtesyList.find((item) => item.id === phoneBorrow).name}</td>
                <td>${courtesyList.find((item) => item.id === phoneBorrow).bond}</td>
              </tr>
            )}
            {chargerBorrow !== 0 && (
              <tr>
                <td>{courtesyList.find((item) => item.id === chargerBorrow).name}</td>
                <td>${courtesyList.find((item) => item.id === chargerBorrow).bond}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormCourtesyPhone;
  