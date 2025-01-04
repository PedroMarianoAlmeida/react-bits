import { Flex } from "@chakra-ui/react";
import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { CODE_EXAMPLES } from "../../constants/ExampleConstants";

import TiltedScroll from "../../content/Components/TiltedScroll/TiltedScroll";
import CodeExample from '../../components/code/CodeExample';

const TiltedScrollDemo = () => {
  const { tiltedScroll } = CODE_EXAMPLES;

  return (
    <TabbedLayout>
      <PreviewTab>
        <Flex overflow="hidden" justifyContent="center" alignItems="center" minH={400} position="relative" pb={"4em"} className="demo-container">
          <TiltedScroll />
        </Flex>
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={tiltedScroll} />
      </CodeTab>
    </TabbedLayout>

  );
}

export default TiltedScrollDemo;