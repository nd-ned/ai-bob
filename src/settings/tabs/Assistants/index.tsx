import { useContext, useEffect, useState } from 'preact/hooks'
import { Assistant } from 'openai/resources/beta/assistants/assistants'

import Sidebar from '../components/Sidebar'
import AddButton from '../components/AddButton'
import { AppContext } from '../../App'
import './assistants.css'
import { FunctionalComponent } from 'preact'
import LoadIndicator from '../components/LoadIndicator'

const models = [
  'gpt-4-turbo-2024-04-09',
  'gpt-4-0613',
  'gpt-4-turbo',
  'gpt-4',
  'gpt-4-1106-preview',
  'gpt-3.5-turbo-16k',
  'gpt-3.5-turbo-0613',
  'gpt-4-0125-preview',
  'gpt-3.5-turbo-16k-0613',
  'gpt-4-turbo-preview',
  'gpt-3.5-turbo-0125',
  'gpt-3.5-turbo-1106',
  'gpt-3.5-turbo',
]

const Assistants: FunctionalComponent = (props) => {
  const { openai, assistantId, setAssistantId } = useContext(AppContext)

  // TODO: the router state should be accessed from the props, figure out how to incoporate get params in the hashHistory

  const [assistants, setAssistants] = useState<Assistant[]>([])
  const [loadingAssistants, setLoadingAssistants] = useState(true)
  const [loadingDetails, setLoadingDetails] = useState(true)
  const [selectedAssistant, setSelectedAssistant] = useState<Assistant | null>(null)

  console.log('assistantId', assistantId)
  console.log('selectedAssistant', selectedAssistant)

  const fetchAssistantDetails = async (assistantId: string) => {
    setLoadingDetails(true)

    const response = await openai?.beta.assistants.retrieve(assistantId)

    if (response) {
      setSelectedAssistant(response)
    }

    setLoadingDetails(false)
  }

  useEffect(() => {
    if (assistantId) {
      fetchAssistantDetails(assistantId)
    }
  }, [assistantId])

  const fetchAssistants = async () => {
    setLoadingAssistants(true)

    const response = await openai?.beta.assistants.list()

    if (response?.data) {
      setAssistants(response.data)
    }

    setLoadingAssistants(false)
  }

  useEffect(() => {
    fetchAssistants()
  }, [])

  const renderAssistantsList = () => {
    if (loadingAssistants) {
      return (
        <div className="assistants-list align-center justify-center d-flex border-right p20">
          <LoadIndicator size="md" />
        </div>
      )
    }

    return (
      <div className="assistants-list border-right p20">
        {assistants.map((assistant) => (
          <div
            className={`assistant menu-item ${assistantId === assistant.id ? 'active' : ''}`}
            key={assistant.id}
            onClick={() => setAssistantId(assistant.id)}
          >
            {assistant.name || 'Untitled assistant'}
          </div>
        ))}
      </div>
    )
  }

  const renderAssistantsDetails = () => {
    if (!assistantId) {
      return (
        <div className="assistant-settings d-flex-cc flex-1 p20">
          <p>Select an assistant to view details</p>
        </div>
      )
    }

    if (loadingDetails) {
      return (
        <div className="assistant-settings d-flex-cc flex-1 p20">
          <LoadIndicator size="md" />
        </div>
      )
    }

    return (
      <div className="assistant-settings p20">
        <h3>Assistant</h3>
        <h2>{selectedAssistant?.name || selectedAssistant?.id}</h2>

        <div className="assistant-settings-item">
          <label>Model</label>
          <select>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        <div className="assistant-settings-item">
          <label>Max tokens</label>
          <input type="number" />
        </div>
      </div>
    )
  }

  return (
    <main className="main-container with-sidebar">
      <Sidebar />
      <section className="content d-flex">
        <div className="content-wrapper d-flex flex-1">
          <header className="flex-between border-bottom ph20 pv10">
            <h1>Assistants</h1>

            <AddButton
              onClick={() => {
                // TODO: Finish create assistant
              }}
            />
          </header>

          <div className="assistants-wrapper">
            {renderAssistantsList()}

            {renderAssistantsDetails()}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Assistants
