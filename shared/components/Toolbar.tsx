'use client'
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react"

const actions = [
  { icon: 'ЗадачиIcon', name: 'Задачи', path: '/tasks' },
  { icon: 'SaveIcon', name: 'Save', path: '' },
  { icon: 'PrintIcon', name: 'Print', path: '' },
  { icon: 'ShareIcon', name: 'Share', path: '' },
];

const Toolbar: FC = () => {
  const router = useRouter()
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', right: 30, bottom: 60 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => router.push(action.path)}
            />
        ))}

      </SpeedDial>
    </Box>
  );
}

export default Toolbar