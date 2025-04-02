import * as SelectRadix from '@radix-ui/react-select';
import { ComponentProps, ComponentPropsWithoutRef, forwardRef } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import s from './select.module.scss';
import { clsx } from 'clsx';

type SelectProps = ComponentProps<typeof SelectRadix.Root>;

export const Select = ({ children, ...props }: SelectProps) => (
  <SelectRadix.Root name="select" {...props}>
    <SelectRadix.Trigger className={s.selectTrigger}>
      <SelectRadix.Value />

      <span className={s.iconWrapper}>
        <span className={s.separator}></span>
        <SelectRadix.Icon className={s.selectIcon}>
          <IoChevronDownOutline />
        </SelectRadix.Icon>
      </span>
    </SelectRadix.Trigger>

    <SelectRadix.Portal>
      <SelectRadix.Content
        position={'popper'}
        sideOffset={8}
        className={s.selectContent}
      >
        <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
      </SelectRadix.Content>
    </SelectRadix.Portal>
  </SelectRadix.Root>
);

type SelectItemProps = ComponentPropsWithoutRef<typeof SelectRadix.Item>;

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <SelectRadix.Item
        className={clsx(s.selectItem, className)}
        {...props}
        ref={forwardedRef}
      >
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    );
  }
);
