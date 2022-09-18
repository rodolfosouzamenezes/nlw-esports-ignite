import * as Select from '@radix-ui/react-select';
import { CaretDown, Check } from 'phosphor-react';
//https://codesandbox.io/s/j82wkb?file=/App.js:3634-3647
//https://www.radix-ui.com/docs/primitives/components/select


export function SelectGame() {
  return (
    <Select.Root>
              <Select.Trigger aria-label='Games' className='flex-1 w-full items-center justify-between inline-flex bg-zinc-900 py-3 px-4 rounded text-zinc-500 text-sm'>
                <Select.Value placeholder='Selecione o game que deseja jogar'/>
                <Select.Icon>
                  <CaretDown className='w-6 h-6' />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content>
                  <Select.ScrollUpButton />
                  <Select.Viewport>
                    <Select.Item value=''>
                      <Select.ItemText>Grand Theft Auto V</Select.ItemText>
                      <Select.ItemIndicator />
                    </Select.Item>

                    <Select.Separator />
                  </Select.Viewport>
                  <Select.ScrollDownButton />
                </Select.Content>
              </Select.Portal>
            </Select.Root>
  )
}