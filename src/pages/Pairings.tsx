import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Dropdown } from "../components/Dropdown";
import { Stack } from "../components/Stack";
import { PageLayout } from "../layouts/PageLayout";
import { deserialize, findPair, PairupState } from "../Pairup";

export function Pairings() {
  const [selectedPerson, setSelectedPerson] = useState<string>();
  const [pairedPerson, setPairedPerson] = useState<string | undefined>();

  const params = useParams();
  const encodedState = params["state"] as string;
  const state = deserialize(encodedState);

  const onFindPair = () => {
    const pair = findPair(state, selectedPerson || '');
    setPairedPerson(pair && (pair[0] === selectedPerson ? pair[1] : pair[0]))
  }

  return (
    <PageLayout>
      <Stack size="xlarge">
        <Dropdown label="Select your name" name="person" onChange={(e: React.FormEvent<HTMLSelectElement>) => setSelectedPerson(e.currentTarget.value)} disabled={selectedPerson ? true : false}>
          <option value="">Select your name</option>
          {state.items.map(person => <option value={person} key={person}>{person}</option>)}
        </Dropdown>
        <Button variant="primary" onClick={onFindPair}>Find my Pair</Button>
        {pairedPerson && `Your pair is ${pairedPerson}`}
      </Stack>
    </PageLayout>
  );
}
