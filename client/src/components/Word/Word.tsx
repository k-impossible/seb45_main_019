import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  Button
} from '@mui/material';
import React, { useState } from 'react';
import Speaker from '../Speaker/Speaker';
import { WordInterface } from '../../interfaces/Word.interface';
const defaultTheme = createTheme();

export default function Word(props: { wordInfo: WordInterface }) {
  const [detailCategory, setDetailCategory] = useState(0);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          width: '55rem',
          height: '40rem',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 4
        }}
      >
        <Box sx={{ display: 'flex', flexShrink: 1, gap: 1, alignItems: 'end' }}>
          <Typography
            variant="h3"
            fontWeight={'fontWeightBold'}
            sx={{
              color: 'text.primary'
            }}
          >
            {props.wordInfo.word}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography>{props.wordInfo.symbol}</Typography>
            <Speaker text={props.wordInfo.word}></Speaker>
            <Button variant="outlined">단어장 추가</Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexShrink: 1, gap: 1 }}>
          {props.wordInfo.wordMeaning.map((el, key) => (
            <Typography
              variant="subtitle1"
              key={key}
              sx={{
                color: 'text.primary',
                fontWeight: 'fontWeightBold',
                fontSize: 19
              }}
            >
              {`${key + 1}. ${el} `}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexShrink: 1,
            gap: 1
          }}
        >
          {props.wordInfo.detailCategories.map((el, key) => (
            <Button
              key={key + '1234'}
              variant={detailCategory === key ? 'contained' : 'outlined'}
              onClick={() => setDetailCategory(key)}
            >
              {el}
            </Button>
          ))}

          <Button></Button>
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1, flexShrink: 9, gap: 2 }}>
          <Box
            sx={{
              flex: '1',
              p: 2,
              borderRadius: 2,
              // borderColor: 'primary.main',
              boxShadow: (theme) => theme.shadows[3]
            }}
          >
            {props.wordInfo.detailDescriptions[detailCategory].map(
              (el, key) => (
                <Typography
                  variant="body1"
                  key={key}
                  sx={{
                    color: 'text.primary',
                    fontSize: 14,
                    fontWeight: 'fontWeightBold',
                    borderBottom: 1,
                    pb: 1,
                    mb: 1,
                    borderColor: 'grey.400'
                  }}
                >
                  {key + 1}. {el}{' '}
                </Typography>
              )
            )}
          </Box>
          <Box
            sx={{
              flex: '1',
              p: 2,
              borderRadius: 2,
              // borderColor: 'primary.main',
              boxShadow: (theme) => theme.shadows[3]
            }}
          >
            {props.wordInfo.wordExample.map((el, key) => (
              <Box
                key={key}
                sx={{ borderBottom: 1, mb: 1, borderColor: 'grey.400' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      fontSize: 14,
                      fontWeight: 'fontWeightBold'
                    }}
                  >
                    {el}{' '}
                  </Typography>
                  <Speaker text={el}></Speaker>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      mb: 1,
                      fontSize: 14,
                      fontWeight: 'fontWeightBold'
                    }}
                  >
                    {props.wordInfo.wordExampleMeaning[key]}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
