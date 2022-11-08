import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Stack } from "../components/Stack";
import { PageLayout } from "../layouts/PageLayout";
import { serialize } from "../Pairup";

type Name = string;
type Names = Name[];

export function Home() {
  const [names, setNames] = useState<Names>(['']);
  const [serialized, setSerialized] = useState<string>('');

  const onSubmit = () => {
    const filtered = names.filter((name) => name);
    console.log(filtered);

    const state = serialize({
      seed: Date.now(),
      items: names.filter((name) => name),
    });
    setSerialized(state);
    const url = `${window.location.origin}/#/${state}`;
    navigator.clipboard.writeText(url)
  }

  const updateName = (value: string, index: number) => {
    const copy = [...names];
    copy[index] = value;
    setNames([...copy])
  }

  return (
    <PageLayout>
      <Stack size="xlarge">
        <Stack size="medium">
          {names.map((_name, index) => <Input label="Name" key={index} onChange={(e) => updateName(e.currentTarget.value, index)} />)}
        </Stack>
        <Stack size="medium">
          <Button variant="secondary" type="button" onClick={() => setNames([...names, ''])}>Add name</Button>
          <Button variant="primary" type="submit" onClick={onSubmit}>PairUp</Button>
        </Stack>
      </Stack>
      <Link to={serialized}>{serialized}</Link>
    </PageLayout>
  );
}
