
  // useEffect(() => {
  //   //@ts-ignore
  //   if (navigator.requestMIDIAccess) {
  //     //@ts-ignore
  //     navigator.requestMIDIAccess().then(success, failure)
  //   }
  //   function success(midi: any) {
  //     var inputs = midi.inputs.values()
  //     // inputs is an Iterator
  //     // inputs.next().value.onmidimessage = onMIDIMessage
  //     let optionsNew = []
  //     for (
  //       var input = inputs.next();
  //       input && !input.done;
  //       input = inputs.next()
  //     ) {
  //       // each time there is a midi message call the onMIDIMessage function
  //       console.log(input.value.name)
  //       optionsNew.push(input.value.name)
  //       input.value.onmidimessage = onMIDIMessage
  //     }
  //     console.log({ optionsNew })
  //     //@ts-ignore
  //     setOptions(optionsNew)
  //     setSelected(optionsNew[0])
  //     console.log('MIDI success')
  //   }
  //   function failure() {
  //     console.error('No access to your midi devices.')
  //   }
  //   function onMIDIMessage(message: any) {
  //     console.log('----')
  //     console.log(message.currentTarget.name, '---', selected)
  //     if (message.currentTarget.name === selected) {
  //       var array: any = Array.from(message.data)
  //       if (array[0] === 144) {
  //         //@ts-ignore
  //         setChord((prevState) => ({
  //           arr: [...prevState.arr, array[1]]
  //         }))
  //       } else if ((array[0] = 128)) {
  //         setChord((prevState) => ({
  //           arr: []
  //         }))
  //       }
  //     }
  //   }
  //   return () => {}
  // }, [])