// src/components/EntryExitLog.js
import React, { useEffect, useState } from 'react';
import { getEntryExitLogs } from '../api/api';

const EntryExitLog = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const response = await getEntryExitLogs();
      setLogs(response.data);
    };
    
    fetchLogs();
  }, []);

  return (
    <div className="container">
      <h2>Entry/Exit Logs</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.movement_id}>
            Vehicle ID: {log.vehicle_id} | Entry: {log.entry_time} | Exit: {log.exit_time} | Duration: {log.duration_minutes} min | Amount Charged: ${log.charged_amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryExitLog;
