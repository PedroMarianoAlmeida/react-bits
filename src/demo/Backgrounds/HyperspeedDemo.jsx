import { useState } from "react";
import { Box, Select, Text } from "@chakra-ui/react";
import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { CODE_EXAMPLES } from "../../constants/ExampleConstants";
import { hyperspeedPresets } from "../../content/Backgrounds/Hyperspeed/HyperSpeedPresets";

import Hyperspeed from "../../content/Backgrounds/Hyperspeed/Hyperspeed";
import PropTable from "../../components/common/PropTable";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import useForceRerender from "../../hooks/useForceRerender";

const HyperspeedDemo = () => {
  const { hyperspeed } = CODE_EXAMPLES;

  const [activePreset, setActivePreset] = useState('one');
  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: 'effectOptions',
      type: 'object',
      default: 'See the "code" tab for default values and presets.',
      description: 'The highly customizable configuration object for the effect, controls things like colors, distortion, line properties, etc.',
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={500} cursor="pointer" mb={4}>
          <Text background={'linear-gradient(to bottom, #444, #111)'} backgroundClip="text" position="absolute" fontWeight={900} top={6} fontSize='4rem'>Click Me</Text>
          <Hyperspeed key={key} effectOptions={hyperspeedPresets[activePreset]} />
        </Box>

        <h2 className="demo-title-extra">Preset</h2>
        <Select defaultValue="one" rounded="xl" w={'300px'} onChange={(e) => {
          setActivePreset(e.target.value);
          forceRerender();
        }}>
          <option value='one'>Cyberpunk</option>
          <option value='two'>Akira</option>
          <option value='three'>Golden</option>
          <option value='four'>Split</option>
          <option value='five'>Highway</option>
        </Select>

        <Dependencies dependencyList={['three, postprocessing']} />
        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={hyperspeed} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default HyperspeedDemo;
