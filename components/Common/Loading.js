import {Box} from 'grommet';
import ScaleLoader from 'react-spinners/ScaleLoader';
import {theme} from '../../util/Constants';

export default function Loading(props) {

  if(props.small){
    return(
        <Box basis="full" algin="center" justify="center" alignContent="center">
          <Box margin={{top: "20px"}} align="center">
            <ScaleLoader height={30} width={4} margin={2} radius={2} color={theme.global.colors.brand}/>
          </Box>
        </Box>
    )
  }

  return (
      <Box basis="full" algin="center" justify="center" alignContent="center">
        <Box margin={{top: "40vh"}} align="center">
          <ScaleLoader height={100} width={6} margin={5} radius={5} color={theme.global.colors.brand}/>
        </Box>
      </Box>
  );
}
